#!/usr/bin/python
# -*- coding: utf-8 -*-

import sqlite3 as lite
import sys

con = lite.connect('test.db')

with con:

    cur = con.cursor()
    cur.execute("CREATE TABLE Rando(Id INT PRIMARY KEY, Num TEXT)")
    cur.execute("INSERT INTO Rando(Num) VALUES(52642)")
