const Unit = require('../models/Unit');

exports.todasLasUnidades = (req, res) => {
  Unit.find().exec((err, unidades) => {
    console.log(unidades);
    res.render('index', { unidades: unidades });
  });
};

exports.agregarBondi = (req, res) => {
  console.log(req.body);
  const nuevoBondi = new Unit({
    linea: req.body.linea,
    chofer: req.body.chofer,
    color: req.body.color
  });
  nuevoBondi.save((err, bondi) => {
    res.redirect('/');
  });
};

exports.nuevoBondi = (req, res) => {
  res.render('nuevocolectivo');
};

exports.secreto = (req, res) => {
  res.send('encontraste la ruta secreta');
};
