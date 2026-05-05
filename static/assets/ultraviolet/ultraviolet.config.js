self.__uv$config = {
  prefix: "/uv/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/assets/ultraviolet/ultraviolet.handler.js",
  bundle: "/assets/ultraviolet/ultraviolet.bundle.js",
  config: "/assets/ultraviolet/ultraviolet.config.js",
  sw: "/assets/ultraviolet/ultraviolet.sw.js",
};
