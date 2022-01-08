import { listen, Router } from 'worktop'
import { signController } from './controllers/sign.controller'
import { verifyController } from './controllers/verify.controller';

const router = new Router();

router.add('GET', '/sign/:unsignedUrl', signController)
router.add('GET', '/verify/:signedUrl', verifyController)

listen(router.run);
