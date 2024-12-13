function addProblem(req,res){

}

function updateProblem(req,res){

}

function deleteProblem(req,res){

}

function getProblem(req,res){

}

function pingProblem(req,res){
    return res.json({Message:"Problem Router working fine!"});
}

module.exports = {
    addProblem,
    updateProblem,
    deleteProblem, 
    getProblem,
    pingProblem
};