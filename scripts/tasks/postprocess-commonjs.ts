import { mod } from 'riceburn';
import ts from 'typescript';
import { getAllPackageInfo } from '../monorepo/getAllPackageInfo';

export function postprocessCommonjsTask() {
  const allPackages = Object.keys(getAllPackageInfo());

  mod('lib-commonjs/**/*.js').asTypescript((node, modder) => {
    if (ts.isCallExpression(node)) {
      if (node.expression.getText() === 'require' && node.arguments.length === 1) {
        const arg = node.arguments[0];
        if (ts.isStringLiteral(arg)) {
          if (belongsToFabric(arg.text) && arg.text.includes('/lib/')) {
            modder.replace(arg, `"${arg.text.replace('/lib/', '/lib-commonjs/')}"`);
          }
        }
      }
    }
  });

  function belongsToFabric(requireArg) {
    for (let packageName of allPackages) {
      if (requireArg === packageName || requireArg.startsWith(packageName + '/')) {
        return true;
      }
    }

    return false;
  }
}
