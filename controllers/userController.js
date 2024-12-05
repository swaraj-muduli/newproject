let users = [
    {id:1,name:'Swaraj-muduli',email:'mail2swarajtech@gmail.com'},
    {id:2,name:'Ajit-mohapatra',email:'mohaptraajit99@gmail.com'}
];

//controller methods

exports.getAllUsers = (req,res) => {
    res.json(users);
};

exports.createUser = (req,res) => {
    const newUser = {
        id:users.length + 1,
        name:req.body.name,
        email:req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
};


exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  };
  
  exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
  
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
  
    res.json(user);
  };

exports.deleteUser = (req,res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if(userIndex === -1) return res.status(404).send('User not found');

     users.splice(userIndex,1);
     res.status(204).send();
};