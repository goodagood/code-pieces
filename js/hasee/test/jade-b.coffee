
jade = require "jade"

str = """
h the title
p the paragraph contents ...
i end
"""

t = jade.compile(str)

p = console.log

#p(t({}))

jr = jade.render(str, {})
p jr

