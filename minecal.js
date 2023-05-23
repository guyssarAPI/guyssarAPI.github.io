    //cal block/ingot/nugget to block/ingot/nugget
    function calculate_ore_block() {var blockore = parseInt(document.getElementById('blockore').value);var result = blockore * 9;document.getElementById('result').innerHTML = result;var result2 = result *9;document.getElementById('result2').innerHTML = result2;}
    function calculate_ore_Ingot() {var blockore2 = parseInt(document.getElementById('blockore2').value);if(blockore2 < 9){result3 = 0;document.getElementById('result3').innerHTML = result3;}else{var calresult3 = blockore2 / 9;var result3 = Math.floor(calresult3);document.getElementById('result3').innerHTML = result3;}var calresult4 = blockore2 *9;var result4 = Math.floor(calresult4);document.getElementById('result4').innerHTML = result4;}
    function calculate_ore_Nugget() {var blockore3 = parseInt(document.getElementById('blockore3').value);if(blockore3 < 81){result5 = 0;document.getElementById('result5').innerHTML = result5;}else{var calresult5 = blockore3 / 9 / 9 ;var result5 = Math.floor(calresult5);document.getElementById('result5').innerHTML = result5;}if(blockore3 < 9){result6 = 0;document.getElementById('result6').innerHTML = result6;}else{var calresult6 = blockore3 / 9  ;var result6 = Math.floor(calresult6);document.getElementById('result6').innerHTML = result6;}}
    //cal block/ingot/nugget to block/ingot/nugget

    //cal redstone
        //cal PowerRail
    function calculate_powerrail(){var powerrail = parseInt(document.getElementById('powerrail').value);var powerrail1 = Math.floor(powerrail);var powerrail_gold = powerrail1 *6;document.getElementById('powerrail_gold').innerHTML = powerrail_gold;var powerrail_real = powerrail1 *6;document.getElementById('powerrail_real').innerHTML = powerrail_real;var powerrail_redstone = powerrail1 *1;document.getElementById('powerrail_redstone').innerHTML = powerrail_redstone;var powerrail_stick = powerrail1 *1;document.getElementById('powerrail_stick').innerHTML = powerrail_stick;}
        //cal Rail
    function calculate_rail(){
        var rail = parseInt(document.getElementById('rail').value); 
        var rail1 = Math.floor(rail);
        
        var rail_iron = rail1 *6;
        document.getElementById('rail_iron').innerHTML = rail_iron;
        var rail_real = rail1 *16;
        document.getElementById('rail_real').innerHTML = rail_real;
        var rail_stick = rail1 *1;
        document.getElementById('rail_stick').innerHTML = rail_stick;
        
    }
        //cal Rail

        //cal Detectorrail
        function calculate_detectorrail(){
            var detectorrail = parseInt(document.getElementById('detectorrail').value);
            var detectorrail1 = Math.floor(detectorrail);


            var detectorrail_iron = detectorrail1*6;
            document.getElementById('detectorrail_iron').innerHTML = detectorrail_iron;
            var detectorrail_stone = detectorrail1*1;
            document.getElementById('detectorrail_stone').innerHTML = detectorrail_stone;
            var detectorrail_redstone = detectorrail1*1;
            document.getElementById('detectorrail_redstone').innerHTML = detectorrail_redstone
            var detectorrail_real = detectorrail1*6;
            document.getElementById('detectorrail_real').innerHTML = detectorrail_real;
        }
        //cal Detectorrail

        //cal Activatorrail
        function calculate_activatorrail(){
            var activatorrail = parseInt(document.getElementById('activatorrail').value);
            var activatorrail1 = Math.floor(activatorrail);

            var activatorrail_real = activatorrail1*6;
            document.getElementById('detectorrail_real').innerHTML = detectorrail_real;
            var activatorrail_stick = activatorrail1*2;
            document.getElementById('detectorrail_stick').innerHTML = detectorrail_stick;
            var activatorrail_iron = activatorrail1*6;
            document.getElementById('detectorrail_iron').innerHTML = detectorrail_iron;

        }
        //cal Activatorrail
    //cal redstone
