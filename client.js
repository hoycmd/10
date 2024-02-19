Damage.GetContext().FriendlyFire.Value = true;

// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value =  GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value =  GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value =  GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value =  GameMode.Parameters.GetBool("Fly");
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "Убийства",
  ShortDisplayName: "Убийства"
 },
 {
  Value: "Deaths",
  DisplayName: "Смерти",
  ShortDisplayName: "Смерти"
 },
{
  Value: "Status",
  DisplayName: "Статус",
  ShortDisplayName: "Статус"
 },
 {
  Value: "Scores",
  DisplayName: "Очки",
  ShortDisplayName: "Очки"
 }
];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "Statistics\Deaths",
 ShortDisplayName: "Statistics\Deaths"
};




// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
 Teams.Add("Red", "<color=red>ЕВРОПА/АЗИЯ/АФРИКА</a>", { r
: 80 });
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add
(1);
}

// ������ ���������  
Ui.GetContext().Hint.Value = "прив"; 
  
des = "@Vanhek34";  
sed = "@Vanhek34";  
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "sed" };  
Teams.Get("Red").Properties.Get("sed").Value = sed; 
 
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };
var maxDeaths = Players.MaxCount * 6;
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths;
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Status",
  DisplayName: "<color=orange>Status</a>",
  ShortDisplayName: "<color=orange>Status</a>"
 },
 {
  Value: "Scores",
  DisplayName: "<color=pink>money</a>",
  ShortDisplayName: "<color=pink>money</a>"
 },
 {
  Value: "Spawns",
  DisplayName: "Donat money",
  ShortDisplayName: "Donat money"
 },
 {

  Value: "Kills",
  DisplayName: "color=yellow>пропуск</a>",
  ShortDisplayName: "<color=yellow>пропуск</a>", }



];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "<color=gooboy>death</a>",
 ShortDisplayName: "<color=gooboy>death</a>"
};





if (blue || !red && !blue) {
 Teams.Add("Blue", "<color=orange>Нато/США</a>", { g: 128 });
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
 if(GameMode.Parameters.GetBool("BlueHasNothing")){
  var inventory = Inventory.GetContext();
  Teams.Get("Blue").Inventory.Main.Value = false;
  Teams.Get("Blue").Inventory.Secondary.Value = false;
  Teams.Get("Blue").Inventory.Melee.Value = false;
  Teams.Get("Blue").Inventory.Explosive.Value = false;
  Teams.Get("Blue").Inventory.Build.Value = false;
 }
}
// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// ����� �� ����� � �������
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// ������ ���������
Ui.getContext().Hint.Value = "Hint/BuildBase";

// ������������ ���������
var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = false
inventory.Explosive.Value = false;
inventory.Build.Value = false;
inventory.BuildInfinity.Value =false ;

// ��������� ��� ������ �����
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// ������������ �����
Spawns.GetContext().RespawnTime.Value = 0;


// ????????? ???? ? ??????? ?? ???????  
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);  
Ui.GetContext().Hint.Value = player +"Заров это :СТРАНЫ РП|Удачи:]";  
 
if (player.id  == "2827CD16AE7CC982"){ 
player.inventory.MainInfinity.Value = true;  
player.inventory.Main.Value = true;  
player.inventory.Melee.Value = true;  
player.inventory.Explosive.Value = true;  
player.inventory.Build.Value = true;  
player.inventory.BuildInfinity.Value = true;player.inventory.ExplosiveInfinity.Value = true;player.inventory.SecondaryInfinity.Value = true; player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true;  
player.Build.FillQuad.Value = true;  
player.Build.RemoveQuad.Value = true;  
player.Build.BalkLenChange.Value = true;  
player.Build.FlyEnable.Value = true;  
player.Build.SetSkyEnable.Value = true;

player.Build.GenMapEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;  
player.Build.QuadChangeEnable.Value = true;  
player.Build.BuildModeEnable.Value = true;  
player.Build.CollapseChangeEnable.Value = true;  
player.Build.RenameMapEnable.Value = true;  
player.Build.ChangeMapAuthorsEnable.Value = true;  
player.Build.LoadMapEnable.Value = true;  
player.Build.ChangeSpawnsEnable.Value = true;  
player.Build.BuildRangeEnable.Value = true; var adminTrigger = AreaPlayerTriggerService.Get("admTrigger"); 
 
admTrigger.Tags = ["admTrigger"];  
admTrigger.Enable = true;  
admTrigger.OnEnter.Add(function(player) {  
 player.inventory.Main.Value = true;  
 player.inventory.MainInfinity.Value = true;  
 player.inventory.Secondary.Value = true;   
 player.inventory.SecondaryInfinity.Value = true;  
 player.inventory.Melee.Value = true;  
 player.inventory.Explosive.Value = true;  
 player.inventory.ExplosiveInfinity.Value = true;  
 player.inventory.Build.Value = true;  
 player.inventory.BuildInfinity.Value = true;  
 player.Build.FlyEnable.Value = true;  

player.Build.FloodFill.Value = true;      
player.Build.FillQuad.Value = true;      
player.Build.RemoveQuad.Value = true;      
player.Build.BalkLenChange.Value = true;      
player.Build.FlyEnable.Value = true;      
player.Build.SetSkyEnable.Value = true;    
    
player.Build.GenMapEnable.Value = true;    
player.Build.ChangeCameraPointsEnable.Value = true;      
player.Build.QuadChangeEnable.Value = true;      
player.Build.BuildModeEnable.Value = true;      
player.Build.CollapseChangeEnable.Value = true;      
player.Build.RenameMapEnable.Value = true;      
player.Build.ChangeMapAuthorsEnable.Value = true;      
player.Build.LoadMapEnable.Value = true;      
player.Build.ChangeSpawnsEnable.Value = true;      
player.Build.BuildRangeEnable.Value = true; 
player.skinType.Value = 2;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ МОДЕРКУ"

var banTrigger = 
AreaPlayerTriggerService.Get("banTrigger"); 


banTrigger.Tags = ["banTrigger"]; 
banTrigger.Enable = true; 
banTrigger.OnEnter.Add(function (player, area) { 
player.Spawns.Enable = false; 
player.Spawns.Despawn();
 
player.Ui.Hint.Value = player + " " + "ТЫ ЗАБАНЕН"; 
});




var lolTrigger =  AreaPlayerTriggerService.Get("LOLTrigger")
lolTrigger.Tags = [LOLAreasTag];  
lolTrigger.Enable = true;  
lolTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ВСЕ БЛОКИ=)";player.Properties.Immortality.Value = false;  
Spawns.GetContext().enable = true;  
lolTrigger.Enable = true;  
Player.inventory.Build.Value = true;  
Player.inventory.BuildInfinity.Value = true;  
Player.inventory.Build.BlocksSet.Value = true;  
lolTrigger.Enable = true;  
}); 
});  
 }  
});  
// ????? ?? ????? ? ???????  
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});  
 
 
//   
var des = "<color=red>СТРАНЫ РП|Удачи:]</a>";   
Teams.Get("Red").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };   
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "Des" };


// entrance1 
Teams.OnRequestJoinTeam.Add(function(player,team){if(player.id ==
"2827CD16AE7CC982" || player.id == "2827CD16AE7CC982"){
player.Properties.Get("VipAdmin").Value = "<size=30><color=#ff0000>Б</color><color=#ff0007>О</color><color=#ff1724>С</color><color=#ff2714>С</color></size>";
player.inventory.Explosive.Value = true; 
player.inventory.ExplosiveInfinity.Value = true; 
player.inventory.Main.Value = true; 
player.inventory.MainInfinity.Value = true; 
player.inventory.Secondary.Value = true 
player.inventory.SecondaryInfinity.Value = true; 
player.inventory.Melee.Value = true; 
player.inventory.Build.Value = true; 
player.inventory.BuildInfinity.Value = true; 
player.Build.BuildModeEnable.Value = true; 
player.Build.Pipette.Value = true; 
player.Build.BuildRangeEnable.Value = true; 
player.Build.FlyEnable.Value = true; 
player.Build.FillQuad.Value = true; 
player.Damage.DamageIn.Value = false;
Build.GetContext().FloodFill.Value = false; 
player.Properties.Get("coins").Value = Infinity; 
player.contextedProperties.SkinType.Value = 1;



var MeleeTrigger =  AreaPlayerTriggerService.Get("MeleeTrigger")
MeleeTrigger.Tags = [MeleeTrigger];  
MeleeTrigger.Enable = true;  
MeleeTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ НОЖ !!!";player.Properties.Immortality.Value = false;  
Spawns.GetContext().enable = true;   
Player.inventory.Melee.Value = true;  
}); 
});  
 }  
});  
// ????? ?? ????? ? ???????  
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});  
} 
 }
   )


 


