self.__uv$config = {
  prefix:    '/my-browser/uv/service/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler:   '/my-browser/uv.handler.js',
  bundle:    '/my-browser/uv.bundle.js',
  config:    '/my-browser/uv.config.js',
  sw:        '/my-browser/uv.sw.js',
};
