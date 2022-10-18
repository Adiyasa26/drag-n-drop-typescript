import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

try {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
} catch (error) {
  console.log('error, ', error);
}
