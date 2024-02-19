Damage.getContext().FriendlyFire.Value = true;
// �������� ��������� �������� �������
Damage.getContext().DamageOut.Value = game mode.Parameters.getBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = game mode.Parameters.getBool("Partial Destruction");
BreackGraph.Weak blocks = game mode.Parameters.getBool("Loosen blocks");
Build.getContext().Filling with a stream.Value = Game mode.Parameters.getBool("Fill");
Build.getContext().FillQuad.Value = game mode.Parameters.getBool("Fill in the square");
Build.getContext().RemoveQuad.Value = game mode.Parameters.GetBool("RemoveQuad");
Build.getContext().Being launched.Value = game mode.Parameters.getBool("Fly");
// setting what to display in the leaderboard
Leaderboard.PlayerLeaderBoardValues = [
{
Value: "Kills",
display name: "Killer",
short display name: "Killer"
},
{
Value: "Death",
display name: "Murty",
short display name: "Murty"
},
{
 
Value: "Status" displayed
name: "Status", short display name: "Status"
},
{
Value: "Points",
display name: "Points",
short display name: "Points"
}
];
Leaderboard.TeamLeaderBoardValue = {
 Meaning: "Death",
DisplayName: "Statistics\Death",
ShortDisplayName: "Statistics\Deaths"
};
// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.getContext().QuadsCount.Value = true;
// ��� ������������ �����
BuiBuild.GetContext().Pipette.Value = true;
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
 Teams.Add("Red", "<color=Green>ЕВРОПА</a>", { r
: 80 });
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add
(1);
}

// ������ ���������  
Ui.GetContext().Hint.Value = "Здарова это СТРАНЫ РП|Удачи:]"; 
  
des = "Страны";  
sed = "Страны";  
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
 Teams.Add("Blue", "<color=Blue>НАТО/США</a>", { g: 128 });
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
player.contextedProperties.SkinType.Value = 1
  } 
 } 
);


var rsTrigger = AreaPlayerTriggerService.Get("rsTrigger"); rsTrigger.Tags = ["rsTrigger"]; 
rsTrigger.Enable = true; 
rsTrigger.OnEnter.Add(function (player) 
{ Game.RestartGame(); });


var KnifeTrigger = AreaPlayerTriggerService.Get("KnifeTrigger"); KnifeTrigger.Tags = ["KnifeTrigger"];
KnifeTrigger.Enable = true;
KnifeTrigger.OnEnter.Add(function(player)
 { GameRestartGame(); });





