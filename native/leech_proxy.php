#!/usr/bin/env php
<?php

declare(strict_types=1);

$length = current(unpack('L', fread(STDIN, 4)));
$data = json_decode(fread(STDIN, $length), true);

$set = '{';
foreach ($data as $link) {
    $set .= '"' . $link . '",';
}
$set = substr($set, 0, -1) . '}';

$cmd = 'osascript -e \'tell application "Leech" to download URLs ' . $set . '\'';
exec($cmd);
// file_put_contents(__DIR__ . '/actual.log', $cmd . "\n", FILE_APPEND);

$out = json_encode(['status' => true]);
fwrite(STDOUT, pack('L', strlen($out)) . $out);
exit();
