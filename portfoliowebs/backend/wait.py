from wsgi import app
from waitress import serve
import logging
from paste.translogger import TransLogger
logger = logging.getLogger('waitress')
logger.setLevel(logging.INFO)

serve(TransLogger(app), host='127.0.0.1', port= 9000)       