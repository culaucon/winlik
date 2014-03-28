// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
Array.prototype.hasMember = function(mem) {
    return (this.indexOf(mem) > -1);
};

Array.prototype.filterByKey = function(key) {
    var result = [];
    for (var i=0; i<this.length; i++)
        result.push(this[i][key]);
    return result;
};

WinLik.getRouteID = function(par) {
    return parseInt(par.substring(1));
};

WinLik.getUserBatch = function(userID) {
    var user = this.data.users[userID];
    return {
        id: userID,
        name: user.name,
        src: user['avatar URL']
    };
};

WinLik.getTeamBatch = function(teamID) {
    var team = this.data.users[teamID];
    return {
        id: teamID,
        name: team.name,
        src: team['avatar URL']
    };
};

WinLik.getWinLikItem = function (key, id) {
    var item = this.data[key][id];
    item.id = id;
    return item;
};

var updateLeaguesPlayed = function(data) {
    var leagues = data.leagues;
    var users = data.users;

    var updateLeaguesPlayedForUser = function(userID) {
        var result = [];

        var joinAsTeam = function(userID, leagueID) {
            var teams = leagues[leagueID].teams;
            for (var teamIndex=0; teamIndex<teams.length; teamIndex++)
                if (teams[teamIndex].members.hasMember(userID))
                    return true;
            return false;
        };

        var joinAsIndividual = function(userID, leagueID) {
            return leagues[leagueID].players.hasMember(userID);
        };

        for (var leagueID=0; leagueID<leagues.length; leagueID++) {
            var league = leagues[leagueID];
            if (league.asTeam && joinAsTeam(userID, leagueID))
                result.push(leagueID);
            if (!league.asTeam && joinAsIndividual(userID, leagueID))
                result.push(leagueID);
        }

        data.users[userID]['leagues-played'] = result;
    };

    for (var i= 0; i<users.length; i++)
        updateLeaguesPlayedForUser(i);
};

updateLeaguesPlayed(WinLik.data);