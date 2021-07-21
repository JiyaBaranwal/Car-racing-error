class Form
{
constructor()
{
    this.title=createElement("h1");
    this.input = createInput();
    this.button= createButton("play");
    this.greeting=createElement("h1");

}
hide()
{
    this.button.hide();
    this.input.hide();
    this.greeting.hide();
}
display(){
    this.title.html("Car Racing Game");
    this.title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playercount=playercount+1;
      player.index = playercount;
      player.update();
      player.updateCount(playercount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });
}
}