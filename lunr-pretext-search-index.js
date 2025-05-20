var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "count1",
  "level": "1",
  "url": "count1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Counting",
  "body": " Counting  In these notes, the set of natural numbers is . For , denote     Let . A permutation of is a bijective function .      Let . The number of permutations of is .      The binomial coefficient (\"n choose k\") is defined as the number of -subsets of a set with elements.     Binomial Theorem  Binomial Theorem   For ,     When , we extend the previous notation and define     For any and ,       A weak -composition of is a collection of integers such that       A -composition of is a collection of integers such that         The number of weak -compositions of is .    The number of -compositions of is .        Let .   Denote by the number of permutations in with exactly cycles.    The Stirling number of the first kind is defined as                 For any      For any          Let .   Denote by the set of all the partitions of into exactly parts.    Define the Stirling number of second kind as the number of all partitions of into exactly parts.                    For fixed           Let and be finite sets. For , denote and . Then       Let . A derangement of is a permutation such that , for any .      If , then       Let . If is the number of derangements of , then       If , then       The Euler totient function is defined as , where equals the number of natural numbers that are coprime with .      If has the prime decomposition , where and are distinct primes, then       The classical Mobius function is defined as , where , if is divisible by the square of a prime, and , if is the product of distinct primes.      If , then       Let be two functions. The following two statements are equivalent and       For a natural number and a prime power , let denote the number of monic irreducible polynomials of degree in . Then       Let . The Catalan number is defined as the number of non-crossing triangulations of a convex -gon using diagonals.      For any ,       For ,       For , let denote the number of ways of writing as the sum of natural numbers (order not important),  For convenience, define .     The generating function of is       For , denote by the number of partitions of into unequal parts.      For , denote by the number of partitions of into odd parts.         The generating function of is     The generating function of is     For any ,        "
},
{
  "id": "def-perm",
  "level": "2",
  "url": "count1.html#def-perm",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  Let . A permutation of is a bijective function .   "
},
{
  "id": "thm-permutation",
  "level": "2",
  "url": "count1.html#thm-permutation",
  "type": "Theorem",
  "number": "1.1.2",
  "title": "",
  "body": "  Let . The number of permutations of is .   "
},
{
  "id": "def-",
  "level": "2",
  "url": "count1.html#def-",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  The binomial coefficient (\"n choose k\") is defined as the number of -subsets of a set with elements.   "
},
{
  "id": "thm-bincoeff",
  "level": "2",
  "url": "count1.html#thm-bincoeff",
  "type": "Theorem",
  "number": "1.1.4",
  "title": "",
  "body": " Binomial Theorem  Binomial Theorem   For ,    "
},
{
  "id": "thm-binomial",
  "level": "2",
  "url": "count1.html#thm-binomial",
  "type": "Theorem",
  "number": "1.1.5",
  "title": "",
  "body": "  For any and ,    "
},
{
  "id": "def-weakcomposition",
  "level": "2",
  "url": "count1.html#def-weakcomposition",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "  A weak -composition of is a collection of integers such that    "
},
{
  "id": "def-composition",
  "level": "2",
  "url": "count1.html#def-composition",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": "  A -composition of is a collection of integers such that    "
},
{
  "id": "thm-kcomp",
  "level": "2",
  "url": "count1.html#thm-kcomp",
  "type": "Theorem",
  "number": "1.1.8",
  "title": "",
  "body": "    The number of weak -compositions of is .    The number of -compositions of is .     "
},
{
  "id": "def-stirling1",
  "level": "2",
  "url": "count1.html#def-stirling1",
  "type": "Definition",
  "number": "1.1.9",
  "title": "",
  "body": "  Let .   Denote by the number of permutations in with exactly cycles.    The Stirling number of the first kind is defined as       "
},
{
  "id": "thm-stirling1",
  "level": "2",
  "url": "count1.html#thm-stirling1",
  "type": "Theorem",
  "number": "1.1.10",
  "title": "",
  "body": "         For any      For any       "
},
{
  "id": "def-stirling2",
  "level": "2",
  "url": "count1.html#def-stirling2",
  "type": "Definition",
  "number": "1.1.11",
  "title": "",
  "body": "  Let .   Denote by the set of all the partitions of into exactly parts.    Define the Stirling number of second kind as the number of all partitions of into exactly parts.      "
},
{
  "id": "thm-stirling2",
  "level": "2",
  "url": "count1.html#thm-stirling2",
  "type": "Theorem",
  "number": "1.1.12",
  "title": "",
  "body": "             For fixed        "
},
{
  "id": "thm-pie",
  "level": "2",
  "url": "count1.html#thm-pie",
  "type": "Theorem",
  "number": "1.1.13",
  "title": "",
  "body": "  Let and be finite sets. For , denote and . Then    "
},
{
  "id": "def-derangement",
  "level": "2",
  "url": "count1.html#def-derangement",
  "type": "Definition",
  "number": "1.1.14",
  "title": "",
  "body": "  Let . A derangement of is a permutation such that , for any .   "
},
{
  "id": "prop-derangement",
  "level": "2",
  "url": "count1.html#prop-derangement",
  "type": "Proposition",
  "number": "1.1.15",
  "title": "",
  "body": "  If , then    "
},
{
  "id": "thm-derangement",
  "level": "2",
  "url": "count1.html#thm-derangement",
  "type": "Theorem",
  "number": "1.1.16",
  "title": "",
  "body": "  Let . If is the number of derangements of , then    "
},
{
  "id": "thm-stirling2formula",
  "level": "2",
  "url": "count1.html#thm-stirling2formula",
  "type": "Theorem",
  "number": "1.1.17",
  "title": "",
  "body": "  If , then    "
},
{
  "id": "def-Eulerphi",
  "level": "2",
  "url": "count1.html#def-Eulerphi",
  "type": "Definition",
  "number": "1.1.18",
  "title": "",
  "body": "  The Euler totient function is defined as , where equals the number of natural numbers that are coprime with .   "
},
{
  "id": "thm-eulerphi",
  "level": "2",
  "url": "count1.html#thm-eulerphi",
  "type": "Theorem",
  "number": "1.1.19",
  "title": "",
  "body": "  If has the prime decomposition , where and are distinct primes, then    "
},
{
  "id": "def-classicalmobius",
  "level": "2",
  "url": "count1.html#def-classicalmobius",
  "type": "Definition",
  "number": "1.1.20",
  "title": "",
  "body": "  The classical Mobius function is defined as , where , if is divisible by the square of a prime, and , if is the product of distinct primes.   "
},
{
  "id": "thm-mobius1",
  "level": "2",
  "url": "count1.html#thm-mobius1",
  "type": "Theorem",
  "number": "1.1.21",
  "title": "",
  "body": "  If , then    "
},
{
  "id": "thm-mobiusinversion",
  "level": "2",
  "url": "count1.html#thm-mobiusinversion",
  "type": "Theorem",
  "number": "1.1.22",
  "title": "",
  "body": "  Let be two functions. The following two statements are equivalent and    "
},
{
  "id": "thm-irredpolycount",
  "level": "2",
  "url": "count1.html#thm-irredpolycount",
  "type": "Theorem",
  "number": "1.1.23",
  "title": "",
  "body": "  For a natural number and a prime power , let denote the number of monic irreducible polynomials of degree in . Then    "
},
{
  "id": "def-catalannumber",
  "level": "2",
  "url": "count1.html#def-catalannumber",
  "type": "Definition",
  "number": "1.1.24",
  "title": "",
  "body": "  Let . The Catalan number is defined as the number of non-crossing triangulations of a convex -gon using diagonals.   "
},
{
  "id": "thm-catalanrecurrence",
  "level": "2",
  "url": "count1.html#thm-catalanrecurrence",
  "type": "Theorem",
  "number": "1.1.25",
  "title": "",
  "body": "  For any ,    "
},
{
  "id": "thm-catalannumberformula",
  "level": "2",
  "url": "count1.html#thm-catalannumberformula",
  "type": "Theorem",
  "number": "1.1.26",
  "title": "",
  "body": "  For ,    "
},
{
  "id": "def-partition",
  "level": "2",
  "url": "count1.html#def-partition",
  "type": "Definition",
  "number": "1.1.27",
  "title": "",
  "body": "  For , let denote the number of ways of writing as the sum of natural numbers (order not important),  For convenience, define .  "
},
{
  "id": "thm-partitiongenfunc",
  "level": "2",
  "url": "count1.html#thm-partitiongenfunc",
  "type": "Theorem",
  "number": "1.1.28",
  "title": "",
  "body": "  The generating function of is    "
},
{
  "id": "def-partitionunequal",
  "level": "2",
  "url": "count1.html#def-partitionunequal",
  "type": "Definition",
  "number": "1.1.29",
  "title": "",
  "body": "  For , denote by the number of partitions of into unequal parts.   "
},
{
  "id": "def-partitionodd",
  "level": "2",
  "url": "count1.html#def-partitionodd",
  "type": "Definition",
  "number": "1.1.30",
  "title": "",
  "body": "  For , denote by the number of partitions of into odd parts.   "
},
{
  "id": "thm-oddunequalpartition",
  "level": "2",
  "url": "count1.html#thm-oddunequalpartition",
  "type": "Theorem",
  "number": "1.1.31",
  "title": "",
  "body": "     The generating function of is     The generating function of is     For any ,       "
},
{
  "id": "graphs",
  "level": "1",
  "url": "graphs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Graph Theory",
  "body": " Graph Theory  In these notes, the set of natural numbers is .  "
},
{
  "id": "groups",
  "level": "1",
  "url": "groups.html",
  "type": "Section",
  "number": "2.1",
  "title": "Groups",
  "body": " Groups  "
},
{
  "id": "rings",
  "level": "1",
  "url": "rings.html",
  "type": "Section",
  "number": "2.2",
  "title": "Rings",
  "body": " Rings  "
},
{
  "id": "fields",
  "level": "1",
  "url": "fields.html",
  "type": "Section",
  "number": "2.3",
  "title": "Fields",
  "body": " Fields    A field      If is a finite field with characteristic , then    is a prime.     , for some .       "
},
{
  "id": "def-field",
  "level": "2",
  "url": "fields.html#def-field",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  A field   "
},
{
  "id": "thm-finitefield",
  "level": "2",
  "url": "fields.html#thm-finitefield",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "",
  "body": "  If is a finite field with characteristic , then    is a prime.     , for some .      "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
