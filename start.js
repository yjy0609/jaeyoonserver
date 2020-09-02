var cmd = require( "node-cmd" );

cmd.run('@echo off');
cmd.run('java -Xmx1024M -Xms256M -jar spigot.jar');