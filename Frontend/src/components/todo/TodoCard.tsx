import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import type { Todo } from '../../types/todo';
import { statusConfig, statusOptions } from '../../utils/constents';

interface TodoCardProps {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: string) => Promise<void>;
}

const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const [isChangingStatus, setIsChangingStatus] = React.useState(false);
  const config = statusConfig[todo.status] || {};
  const StatusIcon = config?.icon || Edit3;

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      onDelete(todo.id);
    }
  };

  const handleStatusChange = async (status: string) => {
    if (status === todo.status) return;
    
    try {
      setIsChangingStatus(true);
      await onStatusChange(todo.id, status);
    } catch (error) {
      console.error('Failed to change status:', error);
    } finally {
      setIsChangingStatus(false);
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <StatusIcon className={`w-5 h-5 ${config.textColor || 'text-gray-600'} flex-shrink-0`} />
            <h3 className="font-semibold text-gray-900 truncate">{todo.title}</h3>
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onEdit(todo)}
              className="h-8 w-8 p-0 hover:bg-blue-100 hover:text-blue-600"
              title="Edit todo"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleDelete}
              className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
              title="Delete todo"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {todo.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{todo.description}</p>
        )}
        
        <div className="flex items-center justify-between">
          <Select 
            value={todo.status} 
            onValueChange={handleStatusChange}
            disabled={isChangingStatus}
          >
            <SelectTrigger className={`w-32 h-7 text-xs ${config.bgColor} ${config.textColor} border`}>
              {isChangingStatus ? (
                <span className="text-xs">Updating...</span>
              ) : (
                <SelectValue />
              )}
            </SelectTrigger>
            <SelectContent>
              {statusOptions
                .filter(option => option.value !== 'all') // Exclude 'all' option
                .map((option) => {
                  const optionConfig = statusConfig[option.value] || {};
                  return (
                    <SelectItem 
                      key={option.value} 
                      value={option.value}
                      className={`${optionConfig.textColor} ${optionConfig.hoverColor}`}
                    >
                      <div className="flex items-center gap-2">
                        {optionConfig.icon && (
                          <optionConfig.icon className="w-4 h-4" />
                        )}
                        {option.label}
                      </div>
                    </SelectItem>
                  );
                })}
            </SelectContent>
          </Select>
          
          <span 
            className="text-xs text-gray-400" 
            title={`Created: ${new Date(todo.created_at).toLocaleString()}`}
          >
            {new Date(todo.created_at).toLocaleDateString()}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoCard;