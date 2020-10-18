package;

class Main {
  public static function main() {
    trace('Create Depot Support');
    trace(Data);
    // Data.Game_Dialogue.lin

    for (line in Data.Game_Dialogue.lines) {
      for (dialogueText in line.Dialogue_Text) {
        trace(dialogueText.text);
      }
    }

    // untyped trace(Data.Game_Dialogue.name, 'Hello');
  }
}
