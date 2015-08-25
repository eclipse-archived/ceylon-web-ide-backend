/*
 * Copyright Red Hat Inc. and/or its affiliates and other contributors
 * as indicated by the authors tag. All rights reserved.
 *
 * This copyrighted material is made available to anyone wishing to use,
 * modify, copy, or redistribute it subject to the terms and conditions
 * of the GNU General Public License version 2.
 * 
 * This particular file is subject to the "Classpath" exception as provided in the 
 * LICENSE file that accompanied this code.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT A
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License,
 * along with this distribution; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA  02110-1301, USA.
 */
package com.redhat.ceylon.js.repl;

import java.util.ArrayList;
import java.util.List;

import com.redhat.ceylon.compiler.typechecker.TypeChecker;
import com.redhat.ceylon.compiler.typechecker.analyzer.UsageWarning;
import com.redhat.ceylon.compiler.typechecker.context.PhasedUnit;
import com.redhat.ceylon.compiler.typechecker.tree.Message;
import com.redhat.ceylon.compiler.typechecker.tree.Node;
import com.redhat.ceylon.compiler.typechecker.tree.Visitor;

public class CollectErrorVisitor extends Visitor {
    private TypeChecker typeChecker;
    private List<Message> errors;
    
    public CollectErrorVisitor(TypeChecker typeChecker) {
        super();
        this.typeChecker = typeChecker;
    }

    public List<Message> listErrors() {
        errors = new ArrayList<Message>();
        for (PhasedUnit pu : typeChecker.getPhasedUnits().getPhasedUnits()) {
            visitAny(pu.getCompilationUnit());
        }
        return errors;
    }
    
    @Override
    public void visitAny(Node that) {
        for(Message message : that.getErrors()){
            if (!(message instanceof UsageWarning)) {
                errors.add(message);
            }
        }
        super.visitAny(that);
    }
}