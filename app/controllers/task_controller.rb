class TaskController < ApplicationController

    def tasks_data 
        data = Task.all
        json_data = data.map { |task| 
            {
                id: task.id,
                title: task.title,
                description: task.description,
                worker: task.worker.name,
                worker_id: task.worker_id,
            }
        }
        render json: json_data
    end

    def create
        p '**************************************'
        p params
        p '**************************************'
      Task.create(task_params)
    #   Todo.create(task: params[:task])
    end


# select * from tasks where user_id = 5

    def update 
        p update_params
        row = Task.find(params[:id])

        row.update!(update_params)
    end

    def destroy
        a = Task.find(params[:id])
        a.destroy 
        a.save()
    end

    private 

    def task_params
        params.require(:tasker).permit(:title, :description, :worker_id)
    end

    def update_params
        params.require(:task).permit(:title, :description, :worker_id)
    end

end
