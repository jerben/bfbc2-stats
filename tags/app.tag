import Navigation from './Navigation.tag';
import Statsbox from './Statsbox.tag';
import Playerstatstable from './Playerstatstable.tag';
import FakeResponsePlayer from '../fake-response-player.json';
import FakeSuggestion from '../fake-suggestions.json'

import PlayerSuggestionsStore from '../src/stores/PlayerSuggestionsStore';
import PlayerStore from '../src/stores/PlayerStore';
import actions from '../src/actions/Actions';

<App>
    <Navigation data ={ this.suggestionData }></Navigation>
    <Statsbox data={ this.overallData }></Statsbox>
    <Playerstatstable data={ this.weaponsData }></Playerstatstable>
    <footer class="footer">
        <div class="container">
            <span>
          by <a href="http://www.du4-gaming.com">DU4</a>
          </span>
        </div>
    </footer>
    <script>
        this.suggestionStore = new PlayerSuggestionsStore();
        this.playerStore = new PlayerStore();

        this.suggestionStore.__emitter.addListener('change', () => {
            this.suggestionData = this.suggestionStore.getState();
            riot.update();
        });

        this.playerStore.__emitter.addListener('change', () => {
            console.log(this.playerStore);
            this.weaponsData = this.playerStore.getState().weapons;
            this.overallData = this.playerStore.getState().overall;
            riot.update();
        });


    </script>
</App>
