const indexcontroller={};

indexcontroller.renderizarIndex = (req, res)=>{
    res.render('index')};

indexcontroller.renderizarAbout= (req, res)=>{
    res.render('about')};

module.exports =indexcontroller;