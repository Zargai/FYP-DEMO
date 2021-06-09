import { Container } from 'typedi';
//import LoggerInstance from './logger';
import agendaFactory from './agenda';
import config from '../config';

export default ({ mongoConnection, models }: { mongoConnection; models: { name: string; model: any }[] }) => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
      console.log('m-->',m.name)
    });

    const agendaInstance = agendaFactory({ mongoConnection });

    Container.set('agendaInstance', agendaInstance);
  //  Container.set('logger', LoggerInstance)

  console.log(' Agenda injected into container ');

    return { agenda: agendaInstance };
  } catch (e) {
    console.log('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};
