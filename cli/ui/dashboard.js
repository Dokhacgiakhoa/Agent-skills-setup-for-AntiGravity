const chalk = require('chalk');
const boxen = require('boxen');

async function launchManagerView(projectDir) {
    console.clear();
    
    const title = chalk.cyan.bold('🌌 Antigravity IDE • Manager View (Agent-First Mode)');
    
    // Giả lập trạng thái các Agent đang hoạt động
    const agents = [
        { name: 'orchestrator', status: chalk.green('IDLE'), task: '-' },
        { name: 'frontend-specialist', status: chalk.blue('WORKING'), task: 'TSK-001: Lên khung Dashboard' },
        { name: 'browser-subagent', status: chalk.yellow('WAITING'), task: 'DOM Analysis (Pending)' },
        { name: 'security-auditor', status: chalk.green('IDLE'), task: '-' }
    ];

    const render = () => {
        console.clear();
        console.log(boxen(title, { padding: 1, borderColor: 'cyan', borderStyle: 'double', textAlignment: 'center', width: 70 }));
        console.log('\n' + chalk.bold.white('👥 Active Agent Swarm:\n'));

        agents.forEach(a => {
            console.log(`  [${a.status.padEnd(18)}] ${chalk.bold(a.name.padEnd(20))} | ${chalk.gray(a.task)}`);
        });

        console.log('\n' + chalk.gray('──────────────────────────────────────────────────────────────────────'));
        console.log(chalk.gray('  Press Ctrl+C to exit Manager View'));
    };

    render();

    // Vòng lặp giả lập realtime
    const interval = setInterval(() => {
        const statuses = [chalk.green('IDLE'), chalk.blue('WORKING'), chalk.yellow('WAITING'), chalk.magenta('THINKING')];
        agents[0].status = statuses[Math.floor(Math.random() * statuses.length)];
        agents[1].task = 'TSK-001: Tích hợp cli-table3';
        render();
    }, 2000);

    // Xử lý luồng dừng
    process.on('SIGINT', () => {
        clearInterval(interval);
        console.log(chalk.yellow('\nManager View disconnected.'));
        process.exit(0);
    });
}

module.exports = { launchManagerView };
