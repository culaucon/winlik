WinLikApp.directive('croppedImage', function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div class='center-cropped'></div>",
        link: function(scope, element, attrs) {
            var width = attrs.width;
            var height = attrs.height;
            element.css('width', width + "px");
            element.css('height', height + "px");
            element.css('backgroundPosition', 'center center');
            element.css('backgroundRepeat', 'no-repeat');
            element.css('backgroundImage', "url('" + attrs.src + "')");
        }
    };
});

WinLikApp.directive('event', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/directives/event.html',
        scope: {
            event: '=eventObject',
            data: '=data'
        },
        link: function (scope) {
            scope.getParticipant = function(id) {
                if (scope.event.asTeam)
                    return scope.data.teams[id];
                else
                    return scope.data.users[id];
            };
            scope.getHRef = function(id) {
                if (scope.event.asTeam)
                    return '#/team/:' + id.toString();
                else
                    return '#/user/:' + id.toString();
            }
        }
    };
});

WinLikApp.directive('faceThumbnail', function() {
    return {
        restrict: 'E',
        scope: {
            name: '@',
            src: '@',
            href: '@'
        },
        link: function(scope) {
            scope.background = {
                'background-image': 'url(' + scope.src + ')'
            }
        },
        template:
            '<div class="face-thumbnail">' +
                '<div class="caption"> ' +
                    '<a ng-href="{{href}}">{{ name }}</a>' +
                '</div>' +
                '<a ng-href="{{href}}">' +
                    '<div class="img square" ng-style="background">' +
                        '<img ng-src="{{src}}">' +
                    '</div>' +
                '</a>' +
            '</div>'
    };
});