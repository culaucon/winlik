WinLikApp.controller('teamControllers', ['$scope', '$routeParams', '$anchorScroll',
    function($scope, $routeParams, $anchorScroll) {
        $anchorScroll();

        var teamID = WinLik.getRouteID($routeParams.teamID);
        var team = WinLik.data.teams[teamID];

        var searchCommunity = function() {
          var communities = WinLik.data.communities;
          for (var i=0; i<communities.length; i++) {
              var community = communities[i];
              if (community.teams.hasMember(teamID))
                return community.name;
          }
          return undefined;
        };

        var getMembersBatches = function() {
            var result = [];
            for (var i=0; i<team.members.length; i++)
                result.push(WinLik.getWinLikItem('users', team.members[i]));
            return result;
        };

        var getLeaguesPlayed = function () {
            var result = [];
            var leagues = WinLik.data.leagues;

            for (var leagueID=0; leagueID<leagues.length; leagueID++) {
                var league = leagues[leagueID];
                league.id = leagueID;
                if (league.asTeam)
                    if (league.teams.filterByKey('teamID').hasMember(teamID))
                        result.push(league);
            }
            return result;
        };

        var getTeamEvents = function () {
            var events = [];
            var leagues = getLeaguesPlayed();

            var appendMatchesPlayed = function(stageID) {
                var stage = WinLik.getWinLikItem('stages', stageID);
                var matches = stage.matches;
                for (var i=0; i<matches.length; i++) {
                    var matchID = matches[i];
                    var match = WinLik.getWinLikItem('matches', matchID);

                    match.isMatch = true;
                    match.league = league.name;
                    match.stage = league.stages.indexOf(stageID) + 1;
                    match.asTeam = league.asTeam;
                    match.myParticipantID = teamID;

                    if (match.participantIDs.hasMember(teamID))
                        events.push(match);
                }
            };

            var appendStageWinnersEvents = function(stageID) {
                var stage = WinLik.getWinLikItem('stages', stageID);
                var event = {};
                event.isMatch = false;
                event.league = league.name;
                event.stage = league.stages.indexOf(stageID) + 1;
                event.asTeam = league.asTeam;
                event.winnersByGroups = [];
                event.myParticipantID = teamID;

                var groups = stage.groups;

                var isInStage = function() {
                    for (var i=0; i<groups.length; i++) {
                        var groupID = groups[i];
                        var group = WinLik.getWinLikItem('groups', groupID);
                        if (group.participantIDs.hasMember(teamID))
                            return true;
                    }
                    return false;
                };

                if (isInStage()) {
                    for (var i=0; i<groups.length; i++) {
                        var groupID = groups[i];
                        var group = WinLik.getWinLikItem('groups', groupID);
                        var winners = {};
                        winners.group = stage.groups.indexOf(groupID) + 1;
                        winners.participantIDs = group.participantIDs.slice(0, group['n-winners']);
                        event.winnersByGroups.push(winners);
                    }
                    events.push(event);
                }
            };

            var appendEventsFromLeague = function(league) {
                var stages = league.stages;
                for (var i=0; i<stages.length; i++) {
                    var stageID = stages[i];
                    appendMatchesPlayed(stageID);
                    appendStageWinnersEvents(stageID);
                }
            };

            for (var i=0; i<leagues.length; i++) {
                var league = leagues[i];
                appendEventsFromLeague(league);
            }
            return events
        };

        $scope.team = team;
        $scope.community = searchCommunity();
        $scope.members = getMembersBatches();
        $scope.leaguesPlayed = getLeaguesPlayed();
        $scope.events = getTeamEvents().reverse();
        $scope.headerContent = 'profile';
        $scope.data = WinLik.data;
    }
]);