import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import uuid4 from 'uuid4';

const execPromisified = util.promisify(child_process.exec);

export const createProjectController = async (req, res) => {

    //1. create a unique id and create a folder with that id inside the projects folder.
    const projectId = uuid4();
    console.log(`Project id is ${projectId}`);
    await fs.mkdir(`./projects/${projectId}`);

    //2. After this, run the npm create vite command in the newly created folder.
    const response = await execPromisified('npm create vite@latest codecanvas -- --template react', {
        cwd: `./projects/${projectId}`,
    })

    return res.json({message: 'Project Created', data: projectId});
}