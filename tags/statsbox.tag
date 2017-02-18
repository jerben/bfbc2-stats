import Infobox from './Infobox.tag';

<Statsbox>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="player-name-box">
                        <p class="player-name">weavii</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <Infobox label="# players" value="5'563"></Infobox>
                </div>
                <div class="col-md-3 col-sm-6">
                    <Infobox label="# kills" value="4'112'212"></Infobox>
                </div>
                <div class="col-md-3 col-sm-6">
                    <Infobox label="# headshots" value="772'323"></Infobox>
                </div>
                <div class="col-md-3 col-sm-6">
                    <Infobox label="total time played" value="155'254 hrs"></Infobox>
                </div>
            </div>
        </div>
    </div>
    <script>
        // TODO(Use the data accessible in opts.data to feed the infobox components by adjusting the markup above)
        // Hint: you can use console.log(opts.data) like below to print the data to the console
        console.log(opts.data);
    </script>
</Statsbox>
