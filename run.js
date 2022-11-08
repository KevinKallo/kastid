function write(string){
    process.stdout.write(string)
}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('hello chalk'));

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        let color=(i*j).toString()
        write(chalk.ansi256(color)(color.padEnd(4,'')));
    }
    write('\n');
}
write(boxen(chalk.redBright.bgRed('Hello chalk'),{
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    title:'double border',
    titleAlignment: 'center',
    borderColor: '#ff1100'
}));
write(boxen(chalk.yellowBright.bgYellow('Hello chalk'),{
    padding: 1,
    margin: 2,
    borderStyle: 'bold',
    title:'bold border',
    titleAlignment: 'center',
    borderColor: 'yellow'
}));
write(boxen(chalk.greenBright.bgGreen('Hello chalk'),{
    padding: 1,
    margin: 1,
    borderStyle: 'single',
    title:'single border',
    titleAlignment: 'center',
    borderColor: 'green'
}));
write(boxen(chalk.blueBright.bgBlue('Hello chalk'),{
    padding: 1,
    margin: 2,
    borderStyle: 'arrow',
    title:'arrow border',
    titleAlignment: 'center',
    borderColor: 'blue'
}));
write(boxen(chalk.cyanBright.bgCyan('Hello chalk'),{
    padding: 1,
    margin: 1,
    title:'border round',
    borderStyle: 'round',
    titleAlignment: 'center',
    borderColor: 'cyan'
}));
write(boxen(chalk.magentaBright.bgMagenta('Hello chalk'),{
    padding: 1,
    margin: 2,
    title:'boder classic',
    borderStyle: 'classic',
    titleAlignment: 'center',
    borderColor: '#8300ff'
}));