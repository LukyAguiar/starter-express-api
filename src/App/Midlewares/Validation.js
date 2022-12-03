module.exports = async(req, res, next) => {
    console.log("Acessou o midlewares");
    next();
}