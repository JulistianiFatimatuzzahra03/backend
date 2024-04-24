const model = require("../database/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function login(req, res) {
    const { email, password } = req.body;

    model.User.findOne({
        where: {
            email: email,
        }
    }).then(function (data) {
        if (!data) {
            res.status(401).json({
                message: "Login Gagal: User tidak ada",
            });
            return;
        }

        let passwordHash = data.password;
        let isPasswordValid = bcrypt.compareSync(password, passwordHash);

        if (isPasswordValid) {
            res.json({
                message: "Berhasil Login",
                data,
                token: jwt.sign({ id: data.id}, process.env.JWT_KEY_SECRET, {
                    expiresIn: '1h'
                }),
            });
        } else {
            res.status(401).json({
                message: "Login Gagal: email atau password",
            });
        }
    }).catch(function (error) {
        console.error('Error during login:', error);
        res.status(500).json({
            message: "Login failed: An error occurred",
            error: error.message,
        });
    });
}

function register(req, res){
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    model.User.findOne({
        where: {
            email: email,
        },
    }).then(function (result){
        if(result){
            res.json({
                message: "Email Sudah Telah Di Terdaftar, Gunakan email lain ",
                data: result
            });
        } else {
            const hashedPassword = bcrypt.hashSync(password, 10);

            model.User.create({
                name: name,
                email: email,
                password: hashedPassword,
            }).then(function (newUser){
                res.json({
                    message: "Registrasi Berhasil",
                    name: newUser.name,
                    email: newUser.email,
                    token: jwt.sign({id: newUser.id}, process.env.JWT_KEY_SECRET,{
                        expiresIn: '1h'
                    }),
                });
            }).catch(function (error){
                res.json({
                    error: error.message
                }); 
            });
        }
    }).catch(function (error){
        res.json({
            error: error.message
        });  
    });
}

module.exports = {
    login, register
}
