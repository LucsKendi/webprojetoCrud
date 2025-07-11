import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { ClasseMod1 } from '../entities/ClasseMod1';

const taskRepository = AppDataSource.getRepository(ClasseMod1);

export const getTasks = async (req: Request, res: Response) => {
     if (!req.user) {
   return res.status(401).json({ message: 'Não autorizado.' });
 }
  const tasks = await taskRepository.find({ where: { ownerUsername: req.user.username } });
 return res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Não autorizado.' });
  }
  const { titulo, detalhes } = req.body;
  const task = taskRepository.create({ titulo, detalhes, ownerUsername: req.user.username });
  await taskRepository.save(task);
  return res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  if (!req.user) {
   return res.status(401).json({ message: 'Não autorizado.' });
  }
  const { id } = req.params;
  const { titulo, detalhes } = req.body;
  const task = await taskRepository.findOneBy({ id: parseInt(id), ownerUsername: req.user.username });

 if (!task) {
    return res.status(404).json({ message: 'Tarefa não encontrada ou não pertence ao usuário.' });
 }

  task.titulo = titulo;
  task.detalhes = detalhes;
  await taskRepository.save(task);
  return res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
 if (!req.user) {
 return res.status(401).json({ message: 'Não autorizado.' });
 }
 const { id } = req.params;
 const result = await taskRepository.delete({ id: parseInt(id), ownerUsername: req.user.username });
 if (result.affected === 0) {
    return res.status(404).json({ message: 'Tarefa não encontrada ou não pertence ao usuário.' });
}
 return res.status(204).send();
};