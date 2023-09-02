function Validation()
{
    //Get values
    var targetSpeed = parseFloat(document.getElementById("reqSpeed").value);
    var baseSpeed = parseFloat(document.getElementById("baseSpeed").value);

    //Reset Errors
    document.getElementById("NaN").hidden = true;
    document.getElementById("tooHigh").hidden = true;
    document.getElementById("empty").hidden = true;

    if((isNaN(targetSpeed) || isNaN(baseSpeed)) == true)
    {
        document.getElementById("NaN").hidden = false;
        document.getElementById("reqSpeedOutput").innerHTML = "Error";
        return;
    }

    console.log(targetSpeed + " " + baseSpeed);

    if(baseSpeed > targetSpeed)
    {
        document.getElementById("tooHigh").hidden = false;
        document.getElementById("reqSpeedOutput").innerHTML = "Error";
        return;
    }

    if((targetSpeed == 0) || (baseSpeed == 0))
    {
        document.getElementById("empty").hidden = false;
        document.getElementById("reqSpeedOutput").innerHTML = "Error";
        return;
    }

    //Good to go
    Calculate();

}

function Calculate()
{
    //Get values
    var targetSpeed = document.getElementById("reqSpeed").value;
    var baseSpeed = document.getElementById("baseSpeed").value;

    //Start Calculation
    var reqSpeed = targetSpeed - baseSpeed;

    if(document.getElementById('gearSet').checked)
    {
        reqSpeed -= (25 / 100) * baseSpeed;
    }

    if(document.getElementById("speedBoot").checked)
    {
        reqSpeed -= 45;

        reqSpeed /= 5;
    }
    else
    {
        reqSpeed /= 6;
    }

    document.getElementById("reqSpeedOutput").innerHTML = reqSpeed;
}
