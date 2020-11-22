
var grgSumOfDays =  Array(Array(0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365),
                    Array(0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366));
var hshSumOfDays =  Array(Array(0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336, 365),
                    Array(0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336, 366));

function ToShamsi(grgYear, grgMonth, grgDay, format) {
    var hshYear = grgYear - 621;
    var hshMonth, hshDay;

    var grgLeap = grgIsLeap(grgYear);
    var hshLeap = hshIsLeap(hshYear - 1);

    var hshElapsed;
    var grgElapsed = grgSumOfDays[(grgLeap ? 1 : 0)][grgMonth - 1] + grgDay;

    var XmasToNorooz = (hshLeap && grgLeap) ? 80 : 79;

    if (grgElapsed <= XmasToNorooz) {
        hshElapsed = grgElapsed + 286;
        hshYear--;
        if (hshLeap && !grgLeap)
            hshElapsed++;
    }
    else {
        hshElapsed = grgElapsed - XmasToNorooz;
        hshLeap = hshIsLeap(hshYear);
    }

    for (var i = 1; i <= 12 ; i++) {
        if (hshSumOfDays[(hshLeap ? 1 : 0)][i] >= hshElapsed) {
            hshMonth = i;
            hshDay = hshElapsed - hshSumOfDays[(hshLeap ? 1 : 0)][i - 1];
            break;
        }
    }
    if (hshMonth < 10) {
        hshMonth = "0" + hshMonth;
    }
    if (hshDay < 10) {
        hshDay = "0" + hshDay;
    }

    if (format === "ymd")
        return  hshYear + "/" + hshMonth + "/" + hshDay  ;
    else
        return hshMonth + "/" + hshDay + "/" + hshYear;
}
function GetShamsiYear(grgYear, grgMonth, grgDay) {
    var hshYear = grgYear - 621;
    var hshMonth, hshDay;

    var grgLeap = grgIsLeap(grgYear);
    var hshLeap = hshIsLeap(hshYear - 1);

    var hshElapsed;
    var grgElapsed = grgSumOfDays[(grgLeap ? 1 : 0)][grgMonth - 1] + grgDay;

    var XmasToNorooz = (hshLeap && grgLeap) ? 80 : 79;

    if (grgElapsed <= XmasToNorooz) {
        hshElapsed = grgElapsed + 286;
        hshYear--;
        if (hshLeap && !grgLeap)
            hshElapsed++;
    }
    else {
        hshElapsed = grgElapsed - XmasToNorooz;
        hshLeap = hshIsLeap(hshYear);
    }

    for (var i = 1; i <= 12; i++) {
        if (hshSumOfDays[(hshLeap ? 1 : 0)][i] >= hshElapsed) {
            hshMonth = i;
            hshDay = hshElapsed - hshSumOfDays[(hshLeap ? 1 : 0)][i - 1];
            break;
        }
    }
    return hshYear;
}

function GetShamsiMonth(grgYear, grgMonth, grgDay) {
    var hshYear = grgYear - 621;
    var hshMonth, hshDay;

    var grgLeap = grgIsLeap(grgYear);
    var hshLeap = hshIsLeap(hshYear - 1);

    var hshElapsed;
    var grgElapsed = grgSumOfDays[(grgLeap ? 1 : 0)][grgMonth - 1] + grgDay;

    var XmasToNorooz = (hshLeap && grgLeap) ? 80 : 79;

    if (grgElapsed <= XmasToNorooz) {
        hshElapsed = grgElapsed + 286;
        hshYear--;
        if (hshLeap && !grgLeap)
            hshElapsed++;
    }
    else {
        hshElapsed = grgElapsed - XmasToNorooz;
        hshLeap = hshIsLeap(hshYear);
    }

    for (var i = 1; i <= 12; i++) {
        if (hshSumOfDays[(hshLeap ? 1 : 0)][i] >= hshElapsed) {
            hshMonth = i;
            hshDay = hshElapsed - hshSumOfDays[(hshLeap ? 1 : 0)][i - 1];
            break;
        }
    }
    return hshMonth;
}
// Converts Shamsi to Gregortian
function ToGregorian (hshYear, hshMonth, hshDay, format)
{
	var grgYear = hshYear+621;
	var grgMonth,grgDay;

	var hshLeap=hshIsLeap (hshYear);
	var grgLeap=grgIsLeap (grgYear);

	var hshElapsed=hshSumOfDays [hshLeap ? 1:0][hshMonth-1]+hshDay;
	var grgElapsed;

	if (hshMonth > 10 || (hshMonth == 10 && hshElapsed > 286+(grgLeap ? 1:0)))
	{
		grgElapsed = hshElapsed - (286 + (grgLeap ? 1:0));
		grgLeap = grgIsLeap (++grgYear);
	}
	else
	{
		hshLeap = hshIsLeap (hshYear-1);
		grgElapsed = hshElapsed + 79 + (hshLeap ? 1:0) - (grgIsLeap(grgYear-1) ? 1:0);
	}

	for (var i=1; i <= 12; i++)
	{
		if (grgSumOfDays [grgLeap ? 1:0][i] >= grgElapsed)
		{
			grgMonth = i;
			grgDay = grgElapsed - grgSumOfDays [grgLeap ? 1:0][i-1];
			break;
		}
	}

	if (format === "dmy")
        return  grgMonth + "/"  + grgDay + "/"+ grgYear;
    else
        return grgDay  + "/" + grgMonth+ "/" + grgYear;
}

// Check for Gregorian Leap
function grgIsLeap (Year)
{
	return ((Year%4) == 0 && ((Year%100) != 0 || (Year%400) == 0));
}

// Check for Shamsi Leap
function hshIsLeap (Year)
{
	Year = (Year - 474) % 128;
	Year = ((Year >= 30) ? 0 : 29) + Year;
	Year = Year - Math.floor(Year/33) - 1;
	return ((Year % 4) == 0);
}

function convertToGregorian(shamsiDate) {
    if (shamsiDate === '') return;

	date = shamsiDate.split('/');
	y = date[0];
	m = date[1];
	d = date[2];

	if (m > 12) {
	    m = date[1];
	    d = date[2];
	    date = ToGregorian(parseInt(y), parseInt(m), parseInt(d),"dmy");
	} else
        date = ToGregorian(parseInt(y), parseInt(m), parseInt(d), "dmy");

	return date;
}

// Convert the Gregorian Date to Shamsi Date
function convertToShamsi(gregDate) {
    if (!gregDate) return null;

    y = gregDate.getFullYear();
    m = gregDate.getMonth() + 1;
    d = gregDate.getDate();

    return ToShamsi(y, m, d, "ymd");
}