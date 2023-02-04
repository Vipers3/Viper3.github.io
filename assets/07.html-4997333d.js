const e=JSON.parse('{"key":"v-30700701","path":"/back_end/nodeJs/07.html","title":"07 【nodejs内置模块（下）】","lang":"zh-CN","frontmatter":{"description":"07 【nodejs内置模块（下）】 1.stream 模块 stream是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。 什么是流？流是一种抽象的数据结构。想象水流，当在水管中流动时，就可以从某个地方（例如自来水厂）源源不断地到达另一个地方（比如你家的洗手池）。我们也可以把数据看成是数据流，比如你敲键盘的时候，就可以把每个字符依次连起来，看成字符流。这个流是从键盘输入到应用程序，实际上它还对应着一个名字：标准输入流（stdin）。 如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字：标准输出流（stdout）。流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.cf/back_end/nodeJs/07.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"07 【nodejs内置模块（下）】"}],["meta",{"property":"og:description","content":"07 【nodejs内置模块（下）】 1.stream 模块 stream是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。 什么是流？流是一种抽象的数据结构。想象水流，当在水管中流动时，就可以从某个地方（例如自来水厂）源源不断地到达另一个地方（比如你家的洗手池）。我们也可以把数据看成是数据流，比如你敲键盘的时候，就可以把每个字符依次连起来，看成字符流。这个流是从键盘输入到应用程序，实际上它还对应着一个名字：标准输入流（stdin）。 如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字：标准输出流（stdout）。流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07 【nodejs内置模块（下）】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.stream 模块","slug":"_1-stream-模块","link":"#_1-stream-模块","children":[{"level":3,"title":"1.1 读取流","slug":"_1-1-读取流","link":"#_1-1-读取流","children":[]},{"level":3,"title":"1.2 写入流","slug":"_1-2-写入流","link":"#_1-2-写入流","children":[]}]},{"level":2,"title":"2.资源压缩模块 zib","slug":"_2-资源压缩模块-zib","link":"#_2-资源压缩模块-zib","children":[{"level":3,"title":"2.1 概览","slug":"_2-1-概览","link":"#_2-1-概览","children":[]},{"level":3,"title":"2.2 压缩的例子","slug":"_2-2-压缩的例子","link":"#_2-2-压缩的例子","children":[]},{"level":3,"title":"2.3 解压的例子","slug":"_2-3-解压的例子","link":"#_2-3-解压的例子","children":[]},{"level":3,"title":"2.4 服务端gzip压缩","slug":"_2-4-服务端gzip压缩","link":"#_2-4-服务端gzip压缩","children":[]},{"level":3,"title":"2.5 服务端字符串gzip压缩","slug":"_2-5-服务端字符串gzip压缩","link":"#_2-5-服务端字符串gzip压缩","children":[]}]},{"level":2,"title":"3.数据加密模块 crypto","slug":"_3-数据加密模块-crypto","link":"#_3-数据加密模块-crypto","children":[{"level":3,"title":"3.1 hash例子","slug":"_3-1-hash例子","link":"#_3-1-hash例子","children":[]},{"level":3,"title":"3.2 HMAC例子","slug":"_3-2-hmac例子","link":"#_3-2-hmac例子","children":[]},{"level":3,"title":"3.3 MD5例子","slug":"_3-3-md5例子","link":"#_3-3-md5例子","children":[]},{"level":3,"title":"3.4 例子：密码保护","slug":"_3-4-例子-密码保护","link":"#_3-4-例子-密码保护","children":[]}]}],"git":{},"readingTime":{"minutes":9.78,"words":2935},"filePathRelative":"back_end/nodeJs/07.md","excerpt":"<h1> 07 【nodejs内置模块（下）】</h1>\\n<h2> 1.stream 模块</h2>\\n<p><code>stream</code>是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。</p>\\n<p>什么是流？流是一种抽象的数据结构。想象水流，当在水管中流动时，就可以从某个地方（例如自来水厂）源源不断地到达另一个地方（比如你家的洗手池）。我们也可以把数据看成是数据流，比如你敲键盘的时候，就可以把每个字符依次连起来，看成字符流。这个流是从键盘输入到应用程序，实际上它还对应着一个名字：标准输入流（stdin）。</p>\\n<p>如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字：标准输出流（stdout）。流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。</p>","autoDesc":true}');export{e as data};