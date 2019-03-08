
def gettext(soup):
    """ Not only get rid of "script" and "style", but also only <p>
    """

    # kill all script and style elements
    for script in soup(["script", "style"]):
        script.extract()    # rip it out

    #for script in soup(["ul", "ol", "li"]):
    #    script.extract()    # rip it out

    #for script not in soup(["p"]):
    #    script.extract()    # rip it out

    # get text
    text = soup.get_text()

    # break into lines and remove leading and trailing space on each
    lines = (line.strip() for line in text.splitlines())
    # break multi-headlines into a line each
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    # drop blank lines
    text = '\n'.join(chunk for chunk in chunks if chunk)

    #print(text)
    return text
