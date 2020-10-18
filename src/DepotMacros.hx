package;

import sys.FileSystem;
import sys.io.File;
import haxe.macro.Expr.Field;
import haxe.Json;
import haxe.macro.Context;

/**
 * Contains the build macros for creating Depot
 * integration within the Haxe programming language.
 */
class DepotMacros {
  public static macro function buildDepotFile(filePath: String): Array<Field> {
    var buildFields = Context.getBuildFields();
    if (FileSystem.exists(filePath)) {
      var fileData = File.getContent(filePath);
      var depotData = Json.parse(fileData);
      trace(depotData);
    }

    return buildFields;
  }
}
