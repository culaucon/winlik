WinLikApp.controller('userControllers', ['$scope', '$routeParams', '$anchorScroll',
    function($scope, $routeParams, $anchorScroll) {
        $anchorScroll();

        var userID = WinLik.getRouteID($routeParams.userID);
        var user = WinLik.data.users[userID];

        var getLeaguesPlayedNames = function() {
            var leaguesPlayed = user['leagues-played'];
            return leaguesPlayed.map(function(leagueID) {
                return WinLik.data.leagues[leagueID].name;
            });
        };

        var getCommunitiesNames = function() {
            var communities = user.communities;
            return communities.map(function(communityID) {
                return WinLik.data.communities[communityID].name;
            });
        };

        var getTeamsBatches = function() {
            var teams = [];
            var teamsList = WinLik.data.teams;
            for (var teamID=0; teamID<teamsList.length; teamID++){
                var team = teamsList[teamID];
                if(team.members.hasMember(userID))
                    teams.push(WinLik.getWinLikItem('teams', teamID));
            }
            return teams;
        };

        var getUserEvents = function() {
            var events = [];
            var leaguesPlayed = user['leagues-played'];

            var getEventsFromLeague = function(league) {
                var result = [];
                var teamID = -1;

                var findTeam = function() {
                    var teams = league.teams;
                    for (var i=0; i<teams.length; i++)
                        if (teams[i].members.hasMember(userID))
                            return teams[i].teamID;
                    return -1;
                };

                if (league.asTeam) {
                    teamID = findTeam();
                    if (teamID === -1)
                        return [];
                }

                var appendMatchPlayed = function (matchID, stageID) {
                    var match = WinLik.data.matches[matchID];
                    match.asTeam = league.asTeam;
                    match.isMatch = true;
                    match.userTeamID = teamID;

                    if (match.asTeam)
                        match.team = WinLik.data.teams[teamID].name;
                    else
                        match.player = WinLik.data.users[userID].name;
                    match.league = league.name;
                    match.stage = league.stages.indexOf(stageID) + 1;

                    if (match.asTeam)
                        match.myParticipantID = teamID;
                    else
                        match.myParticipantID = userID;

                    if ((!match.asTeam) &&
                        match.participantIDs.hasMember(userID) &&
                        match['ended-by'])
                        result.push(match);

                    if (match.asTeam && match.participantIDs.hasMember(teamID))
                        result.push(match);
                };

                var appendStageWinnersEvent = function (stageID) {
                    var stage = WinLik.data.stages[stageID];
                    var event = {};
                    event.isMatch = false;
                    event.asTeam = league.asTeam;
                    event.winnersByGroups = [];
                    event.league = league.name;
                    event.stage = league.stages.indexOf(stageID) + 1;
                    event.userTeamID = teamID;

                    if (league.asTeam)
                        event.participantIDs = league.teams;
                    else
                        event.participantIDs = league.players;


                    var addWinnersInfoFromGroup = function (groupID, stage) {
                        var group = WinLik.data.groups[groupID];
                        var winners = {};
                        winners.group = stage.groups.indexOf(groupID) + 1;
                        winners.participantIDs = group.participantIDs.slice(0, group['n-winners']);
                        event.winnersByGroups.push(winners);
                    };

                    var addStageWinnersInfo = function () {
                        for (var i=0; i<stage.groups.length; i++) {
                            var groupID = stage.groups[i];
                            addWinnersInfoFromGroup(groupID, stage);
                        }
                    };

                    var isWinner = function() {
                        for (var i=0; i<event.winnersByGroups.length; i++) {
                            var winnersGroup = event.winnersByGroups[i];
                            if (event.asTeam && winnersGroup.participantIDs.hasMember(teamID))
                                return true;
                            if ((!event.asTeam) && winnersGroup.participantIDs.hasMember(userID))
                                return true;
                        }
                        return false;
                    };

                    if (stage.ended) {
                        addStageWinnersInfo();
                        if (isWinner())
                            result.push(event);
                    }
                };

                var extractEventsFromStage = function(stageID) {
                    var stagePlayed = WinLik.data.stages[stageID];
                    var matchesPlayed = stagePlayed.matches;

                    for (var j=0; j<matchesPlayed.length; j++) {
                        var matchID = matchesPlayed[j];
                        appendMatchPlayed(matchID, stageID);
                    }

                    appendStageWinnersEvent(stageID);
                };

                var stagesPlayed = league.stages;

                for (var i=0; i<stagesPlayed.length; i++) {
                    var stageID = stagesPlayed[i];
                    extractEventsFromStage(stageID);
                }

                return result;
            };

            for (var i=0; i<leaguesPlayed.length; i++) {
                var leagueID = leaguesPlayed[i];
                var league = WinLik.data.leagues[leagueID];
                events = events.concat(getEventsFromLeague(league));
            }

            return events;
        };

        $scope.data = WinLik.data;
        $scope.userID = userID;
        $scope.user = user;
        $scope.leaguesPlayed = getLeaguesPlayedNames();
        $scope.communities = getCommunitiesNames();
        $scope.teams = getTeamsBatches();
        $scope.events = getUserEvents().reverse();
        $scope.headerContent = 'profile';
    }
]);