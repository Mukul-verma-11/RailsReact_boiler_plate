class TodoController < ApplicationController

    def todos_data 
        data = Todo.all
        json_data = data.map { |todo| 
            {
                id: todo.id,
                title: todo.title,
                description: todo.description,
                worker: todo.worker.name,
                worker_id: todo.worker_id,
            }
        }
        render json: json_data
    end

    def create
      Todo.create(todo_params)
    #   Todo.create(task: params[:task])
    end


# select * from tasks where user_id = 5

    def update 
        p update_params
        row = Todo.find(params[:id])

        row.update!(update_params)
    end

    def destroy
        a = Todo.find(params[:id])
        a.destroy 
        a.save()
    end

    private 

    def todo_params
        params.require(:task).permit(:title, :description, :worker_id)
    end

    def update_params
        params.require(:task).permit(:title, :description, :worker_id)
    end

end
