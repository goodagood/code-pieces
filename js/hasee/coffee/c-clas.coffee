
p = console.log

class A
    vc : 'inner'

    constructor : (@va, vb) ->
        p 'con-stru-ctor'

    show_a : () ->
        p "va: #{@va}"
        @va

    show_b : () ->
        p "vb: #{@vb}"
        @vb

    show_c : () ->
        p "vc: #{@vc}"
        @vc

    show_more: () ->
        @show_a()
        @show_b()

a = new A(1, 11)
#a.show_a()
a.show_more()
