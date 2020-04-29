import { BlankNode } from './blank-node'
import { DefaultGraph } from './default-graph'
import { Literal } from './literal'
import { NamedNode } from './named-node'
import { Quad } from './quad'
import { Variable } from './variable'

export const defaultGraphInstance = new DefaultGraph()

export function namedNode (value) {
  return new NamedNode(value)
}

export function blankNode (value) {
  return new BlankNode(value)
}

export function literal (value, languageOrDatatype) {
  if (typeof languageOrDatatype === 'string') {
    if (languageOrDatatype.indexOf(':') === -1) {
      return new Literal(value, languageOrDatatype)
    }

    return new Literal(value, null, namedNode(languageOrDatatype))
  }

  return new Literal(value, null, languageOrDatatype)
}

export function defaultGraph () {
  return defaultGraphInstance
}

export function variable (value) {
  return new Variable(value)
}

export function quad (subject, predicate, object, graph) {
  return new Quad(subject, predicate, object, graph || defaultGraphInstance)
}

export function triple (subject, predicate, object) {
  return quad(subject, predicate, object)
}
