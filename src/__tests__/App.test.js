import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const defaultTodo = [{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  },
  {
    id: 3,
    name: 'Ship it',
    isComplete: false,
  }
];

const newTodoList = {
  id: 3,
  name: "Learn",
  isComplete: false,
};
const todo = [newTodoList, ...defaultTodo]
const expected = JSON.stringify(todo)


// Act
const actualList = AddTodo(defaultTodo, newTodoList);
const result = JSON.stringify(actualList)

// Assert
expect(result).toBe(expected);
});

test('should not mutate the existing todo array', () => {
  // Arrange
  const defaultTodo = [{
    id: 1,
    name: "Learn JSX",
    isComplete: false,
  },
  {
    id: 2,
    name: "Build awasome react app",
    isComplete: false,
  },
];

const newTodoList = {
  id: 3,
  name: "Learn",
  isComplete: false,
};

const expected = [{
    id: 1,
    name: "Learn JSX",
    isComplete: false,
  },
  {
    id: 2,
    name: "Build awasome react app",
    isComplete: false,
  },
];

// Act
AddTodo(defaultTodo, newTodoList);
const actualtodoList = defaultTodo;
const Comparation = JSON.stringify(expected) === JSON.stringify(actualtodoList);

// // Assert
expect(true).toBe(Comparation);
});