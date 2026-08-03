package com.fahad.knowledgeos.knowledgesource.scanner;

import java.nio.file.Path;
import java.util.List;

public interface FolderScanner {

    List<Path> scan(Path root);

}
