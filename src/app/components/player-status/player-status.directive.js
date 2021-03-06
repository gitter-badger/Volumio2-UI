class PlayerStatusDirective {
  constructor() {
    'ngInject';

    let directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/player-status/player-status.html',
      scope: false,
      controller: PlayerStatusController,
      controllerAs: 'playerStatus',
      bindToController: true
    };

    return directive;
  }
}

class PlayerStatusController {
  constructor(playerService) {
    'ngInject';
    this.playerService = playerService;
    //console.log(this.playerService);
  }
}

export default PlayerStatusDirective;
