import { Button, Typography } from "antd";
import { useCreateProject } from "../../hooks/apis/mutations/useCreateProject";
import './createProject-styles.css';

const CreateProject = () => {

    const { createProjectMutation, isPending } = useCreateProject();
    const { Text } = Typography;

    async function handleCreateProject(){
        try{
            await createProjectMutation();
            console.log("Now we should redirect to editor");
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className="create-project-container">
           {/* Header */}
            <div className="brand-header">
                <div className="brand-logo">&lt; &gt;</div>
                <span className="brand-title">CodeCanvas</span>
            </div>

            {/* Center Button */}
            <div className="main-content">
                <Button
                type="primary"
                size="large"
                className="create-btn"
                loading={isPending}
                onClick={handleCreateProject}
                >
                    Create Playground
                </Button>
                <Text className="subtitle">Start a new React project</Text>
            </div>

            {/* Version Footer */}
            <div className="version-text">v0.1.0</div>
        </div>
    )
}

export default CreateProject;