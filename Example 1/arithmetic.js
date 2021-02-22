var PI = 3.14;

function division(x1, x2) 
{
    if(x2 ==0)
    {
        showDivision();
    }
    else
    {
        return x1/x2;
    }
}

function showDivision()
{
    console.log('No se puede dividir entre 0.');
}

exports.division = division;
exports.PI = PI;