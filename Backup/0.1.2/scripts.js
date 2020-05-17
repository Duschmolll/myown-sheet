//<!--Tab Script-->
<script type="text/worker">
    const buttonlist = ["attributes","equipement","z"];
    buttonlist.forEach(button => {
        on(`clicked:${button}`, function() {
            setAttrs({
                sheetTab: button
            });
        });
    });
</script>

//<!--Calcul Bonus-->
<script type="text/worker">
    on("change:force-bonus-check change:force change:force-bonus sheet:opened", function(){
        getAttrs(["force","force-bonus","force-bonus-check"], function(values){
            let var_force = parseInt(values["force"],10);
            let var_force_bonus = parseInt(values["force-bonus"],10);
            let var_force_bonus_check = parseInt(values["force-bonus-check"],10);
            if(var_force_bonus_check == 1) {                       
                setAttrs({       
                    "force-result": var_force + var_force_bonus 
                });
            }
            else {        
                setAttrs({       
                    "force-result": var_force 
                });
            }
        });
    });
</script>   

//<!--Debug-->
<script type="text/worker">
on("sheet:opened", function(){
    setAttrs({
        "debug": "00-01"
    });
});
</script>

//<!--Multi Calcul Stat-->
<script type="text/worker">
on("sheet:opened", function(){
    setAttrs({
        "debug": "03-01"
    });
});

const stats = ['force''endurance''presence''forge''''intelligence','magie','erudition','alchimie''agilite''discretion''discretion''perception''ebeniste'];
stats.forEach(function (stat) {
    on("change:" + stat + " change:" + stat + "-bonus change:" + stat + "-bonus-check sheet:opened", function () {
        setAttrs({
                    "debug": "03-02"
                });
        getAttrs([stat,stat+"-bonus",stat+"-bonus-check"], function (values) {
            let var_stat = parseInt(values[stat], 10);
            let var_stat_bonus = parseInt(values[stat+'-bonus'], 10);
            let var_stat_bonus_check = parseInt(values[stat+'-bonus-check'], 10);
            if (var_stat_bonus_check == 1) {
                setAttrs({
                    "debug": "03-03",
                    [stat+"-result"]: var_stat + var_stat_bonus
                });
            }
            else {
                setAttrs({
                    "debug": "03-04",
                    [stat+"-result"]: var_stat 
                });
            }
        });        
    });
});
</script>

</script>