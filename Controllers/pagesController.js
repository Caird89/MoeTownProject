exports.show = (req, res) => {

    const path = (req.path === '/') ? `/Home` : req.path;
  

    res.render(`pages${path}`); 
  };