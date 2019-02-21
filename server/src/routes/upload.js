import fs from 'fs';
import { Router } from 'express';
import { IncomingForm } from 'formidable';

const router = Router();
const uploadPath = './uploads';

router.post('/upload',
  (req, res) => {
    const form = new IncomingForm();
    let responsePath;

    form.on('file',
      (field, file) => {
        if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
        responsePath = `/uploads/${file.name}`;
        fs.copyFile(
          file.path,
           `${uploadPath}/${file.name}`,
          error => error ? res.status(500).send() : null
        );
      }
    );

    form.on('end', () => res.json(responsePath));
    form.parse(req);
  }
);

module.exports = router;
