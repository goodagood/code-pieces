
test : setup  a
	@echo $@ depends on : $< and $^

	#ls  s*
	@echo

b : a  setup

a : mda.js
	@echo '- For target a:'
	#node mda.js
	ls -l mda.js
	@echo

.PHONY :  a  b  setup

